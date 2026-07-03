import axios, { AxiosInstance } from 'axios';

interface TalentHRConfig {
  apiKey: string;
  domain: string;
  baseURL?: string;
}

interface JobPosition {
  id: number;
  title: string;
  description: string;
  requirements: string[];
  location: string;
  employment_type: string;
  department: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

interface JobApplication {
  position_id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  cover_letter?: string;
  resume_url?: string;
}

interface TalentHRResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export class TalentHRService {
  private client: AxiosInstance;
  private apiKey: string;
  private domain: string;

  constructor(config: TalentHRConfig) {
    this.apiKey = config.apiKey;
    this.domain = config.domain;

    // Create base64 encoded auth header
    const auth = Buffer.from(`${this.apiKey}:123`).toString('base64');

    this.client = axios.create({
      baseURL: config.baseURL || 'https://pubapi.talenthr.io/v1',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      timeout: 30000,
    });

    // Add response interceptor for error handling
    this.client.interceptors.response.use(
      (response) => response,
      (error: Error & { response?: { status?: number; data?: unknown }; message: string }) => {
        console.error('TalentHR API Error:', {
          status: error.response?.status,
          data: error.response?.data,
          message: error.message,
        });
        throw error;
      }
    );
  }

  /**
   * Get all active job positions
   */
  async getJobPositions(): Promise<JobPosition[]> {
    try {
      const response = await this.client.get<TalentHRResponse<JobPosition[]>>('/job-positions', {
        params: {
          offset: -1, // Disable pagination to get all results
          is_active: 1, // Only get active positions
        },
      });

      if (response.data.success) {
        return response.data.data || [];
      } else {
        console.error('TalentHR API returned unsuccessful response:', response.data);
        return [];
      }
    } catch (error) {
      console.error('Failed to fetch job positions from TalentHR:', error);
      return [];
    }
  }

  /**
   * Get a specific job position by ID
   */
  async getJobPosition(id: number): Promise<JobPosition | null> {
    try {
      const response = await this.client.get<TalentHRResponse<JobPosition>>(`/job-positions/${id}`);
      
      if (response.data.success) {
        return response.data.data || null;
      } else {
        console.error('TalentHR API returned unsuccessful response:', response.data);
        return null;
      }
    } catch (error) {
      console.error('Failed to fetch job position from TalentHR:', error);
      return null;
    }
  }

  /**
   * Submit a job application
   */
  async submitApplication(application: JobApplication): Promise<boolean> {
    try {
      const response = await this.client.post<TalentHRResponse<any>>('/applications', application);
      
      if (response.data.success) {
        console.log('Job application submitted successfully:', response.data);
        return true;
      } else {
        console.error('TalentHR API returned unsuccessful response:', response.data);
        return false;
      }
    } catch (error) {
      console.error('Failed to submit job application to TalentHR:', error);
      return false;
    }
  }

  /**
   * Test API connection
   */
  async testConnection(): Promise<boolean> {
    try {
      const response = await this.client.get<TalentHRResponse<string[]>>('/timezones');
      return response.data.success;
    } catch (error) {
      console.error('TalentHR API connection test failed:', error);
      return false;
    }
  }

  /**
   * Get available departments
   */
  async getDepartments(): Promise<string[]> {
    try {
      const response = await this.client.get<TalentHRResponse<{ name: string }[]>>('/departments');
      
      if (response.data.success) {
        return response.data.data?.map((dept) => dept.name) || [];
      } else {
        console.error('TalentHR API returned unsuccessful response:', response.data);
        return [];
      }
    } catch (error) {
      console.error('Failed to fetch departments from TalentHR:', error);
      return [];
    }
  }

  /**
   * Get available locations
   */
  async getLocations(): Promise<string[]> {
    try {
      const response = await this.client.get<TalentHRResponse<{ name: string }[]>>('/locations');
      
      if (response.data.success) {
        return response.data.data?.map((loc) => loc.name) || [];
      } else {
        console.error('TalentHR API returned unsuccessful response:', response.data);
        return [];
      }
    } catch (error) {
      console.error('Failed to fetch locations from TalentHR:', error);
      return [];
    }
  }
}

// Singleton instance
let talentHRService: TalentHRService | null = null;

export function getTalentHRService(): TalentHRService {
  if (!talentHRService) {
    const apiKey = process.env.TALENTHR_API_KEY;
    const domain = process.env.TALENTHR_DOMAIN;

    if (!apiKey || !domain) {
      throw new Error('TalentHR credentials not configured. Please set TALENTHR_API_KEY and TALENTHR_DOMAIN environment variables.');
    }

    talentHRService = new TalentHRService({
      apiKey,
      domain,
    });
  }

  return talentHRService;
}

export type { JobPosition, JobApplication, TalentHRResponse };
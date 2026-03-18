export type JobType = 'Full-time' | 'Part-time' | 'Contract' | 'Freelance' | 'Internship';
export type Department = 'Engineering' | 'Design' | 'Marketing' | 'Sales' | 'Product' | 'Customer Support';

export interface Job {
  id: string;
  title: string;
  department: Department;
  location: string;
  type: JobType;
  description: string;
  postedAt: string;
  salary?: string;
}

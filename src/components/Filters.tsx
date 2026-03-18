import React from 'react';
import type { JobType, Department } from '../types';

interface FiltersProps {
  selectedType: JobType | 'All';
  setSelectedType: (type: JobType | 'All') => void;
  selectedDepartment: Department | 'All';
  setSelectedDepartment: (dept: Department | 'All') => void;
}

const jobTypes: (JobType | 'All')[] = ['All', 'Full-time', 'Part-time', 'Contract', 'Freelance', 'Internship'];
const departments: (Department | 'All')[] = ['All', 'Engineering', 'Design', 'Marketing', 'Sales', 'Product', 'Customer Support'];

export const Filters: React.FC<FiltersProps> = ({
  selectedType,
  setSelectedType,
  selectedDepartment,
  setSelectedDepartment,
}) => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 backdrop-blur-md">
      <h2 className="mb-6 text-lg font-semibold text-slate-200">Filters</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="mb-3 text-sm font-medium text-slate-400">Job Type</h3>
          <div className="flex flex-col gap-2">
            {jobTypes.map((type) => (
              <label key={type} className="flex cursor-pointer items-center gap-3 group">
                <div className="relative flex items-center justify-center">
                  <input
                    type="radio"
                    name="jobType"
                    value={type}
                    checked={selectedType === type}
                    onChange={(e) => setSelectedType(e.target.value as JobType | 'All')}
                    className="peer sr-only"
                  />
                  <div className="h-5 w-5 rounded-full border-2 border-slate-700 transition-colors peer-checked:border-brand-500 group-hover:border-slate-500" />
                  <div className="absolute h-2.5 w-2.5 scale-0 rounded-full bg-brand-500 transition-transform peer-checked:scale-100" />
                </div>
                <span className={`text-sm ${selectedType === type ? 'text-slate-200 font-medium' : 'text-slate-400 group-hover:text-slate-300'}`}>
                  {type}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="h-px bg-slate-800" />

        <div>
          <h3 className="mb-3 text-sm font-medium text-slate-400">Department</h3>
          <div className="flex flex-col gap-2">
            {departments.map((dept) => (
              <label key={dept} className="flex cursor-pointer items-center gap-3 group">
                <div className="relative flex items-center justify-center">
                  <input
                    type="radio"
                    name="department"
                    value={dept}
                    checked={selectedDepartment === dept}
                    onChange={(e) => setSelectedDepartment(e.target.value as Department | 'All')}
                    className="peer sr-only"
                  />
                  <div className="h-5 w-5 rounded-full border-2 border-slate-700 transition-colors peer-checked:border-brand-500 group-hover:border-slate-500" />
                  <div className="absolute h-2.5 w-2.5 scale-0 rounded-full bg-brand-500 transition-transform peer-checked:scale-100" />
                </div>
                <span className={`text-sm ${selectedDepartment === dept ? 'text-slate-200 font-medium' : 'text-slate-400 group-hover:text-slate-300'}`}>
                  {dept}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

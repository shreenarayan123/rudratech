import React from 'react';
import { MapPin, Briefcase, DollarSign, Clock } from 'lucide-react';
import type { Job } from '../types';
import { motion } from 'framer-motion';

interface JobCardProps {
  job: Job;
  onClick: (job: Job) => void;
}

export const JobCard: React.FC<JobCardProps> = ({ job, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onClick(job)}
      className="group cursor-pointer rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-md transition-all hover:border-brand-500/50 hover:bg-slate-900/80 hover:shadow-[0_0_20px_-5px_var(--color-brand-500)]"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex-1">
          <div className="mb-2 flex items-center gap-3">
            <span className="inline-flex rounded-full bg-slate-800 px-2.5 py-0.5 text-xs font-medium text-slate-300">
              {job.department}
            </span>
            <span className="text-xs text-slate-500">
              Posted {new Date(job.postedAt).toLocaleDateString()}
            </span>
          </div>
          <h3 className="mb-1 text-xl font-semibold text-slate-100 group-hover:text-brand-400 transition-colors">
            {job.title}
          </h3>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-400">
            <div className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              {job.location}
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {job.type}
            </div>
            {job.salary && (
              <div className="flex items-center gap-1.5">
                <DollarSign className="h-4 w-4" />
                {job.salary}
              </div>
            )}
          </div>
        </div>
        <div className="hidden sm:block">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800 text-brand-400 group-hover:bg-brand-500 group-hover:text-white transition-colors">
            <Briefcase className="h-6 w-6" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

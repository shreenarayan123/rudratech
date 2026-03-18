import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, DollarSign, Clock, Building2, Send } from 'lucide-react';
import type { Job } from '../types';

interface JobModalProps {
  job: Job | null;
  onClose: () => void;
}

export const JobModal: React.FC<JobModalProps> = ({ job, onClose }) => {
  return (
    <AnimatePresence>
      {job && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm"
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl"
            >
              {/* Header */}
              <div className="relative border-b border-slate-800 bg-slate-900/50 p-6 sm:p-8">
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                  <button
                    onClick={onClose}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-slate-400 transition-colors hover:bg-slate-700 hover:text-white"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex rounded-full bg-brand-500/10 px-3 py-1 text-xs font-semibold text-brand-400">
                    {job.department}
                  </span>
                  <span className="text-sm text-slate-500">
                    Posted {new Date(job.postedAt).toLocaleDateString()}
                  </span>
                </div>
                
                <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-slate-100 pr-10">
                  {job.title}
                </h2>
                
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-slate-300">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-slate-500" />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-slate-500" />
                    {job.type}
                  </div>
                  {job.salary && (
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-slate-500" />
                      {job.salary}
                    </div>
                  )}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto">
                <div className="prose prose-invert max-w-none">
                  <h3 className="text-lg font-semibold text-slate-100 flex items-center gap-2 mb-4">
                    <Building2 className="h-5 w-5 text-brand-400" />
                    About the Role
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    {job.description}
                  </p>
                  
                  <h3 className="text-lg font-semibold text-slate-100 mb-4">
                    Requirements
                  </h3>
                  <ul className="list-disc pl-5 text-slate-300 space-y-2 mb-6">
                    <li>Strong communication and collaboration skills</li>
                    <li>Experience working in an agile environment</li>
                    <li>Ability to deliver high-quality work independently</li>
                    <li>Passion for building great user experiences</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold text-slate-100 mb-4">
                    Benefits
                  </h3>
                  <ul className="list-disc pl-5 text-slate-300 space-y-2">
                    <li>Competitive salary and equity package</li>
                    <li>Comprehensive health, dental, and vision insurance</li>
                    <li>Flexible remote work policy</li>
                    <li>Generous learning and development budget</li>
                  </ul>
                </div>
              </div>
              
              {/* Footer */}
              <div className="border-t border-slate-800 bg-slate-900/50 p-6 sm:p-8 flex items-center justify-between">
                <button
                  onClick={onClose}
                  className="rounded-lg px-6 py-2.5 cursor-pointer text-sm font-medium text-slate-300 hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  className="flex items-center cursor-pointer gap-2 rounded-lg bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-brand-500 hover:shadow-[0_0_20px_-5px_var(--color-brand-500)]"
                >
                  Apply Now
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

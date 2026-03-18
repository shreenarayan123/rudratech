import { useState, useMemo } from 'react';
import type { Job, JobType, Department } from './types';
import { dummyJobs } from './data/jobs';
import { JobCard } from './components/JobCard';
import { Filters } from './components/Filters';
import { JobModal } from './components/JobModal';
import { BriefcaseBusiness, Search } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  const [selectedType, setSelectedType] = useState<JobType | 'All'>('All');
  const [selectedDepartment, setSelectedDepartment] = useState<Department | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const filteredJobs = useMemo(() => {
    return dummyJobs.filter((job) => {
      const matchType = selectedType === 'All' || job.type === selectedType;
      const matchDept = selectedDepartment === 'All' || job.department === selectedDepartment;
      const matchSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          job.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchType && matchDept && matchSearch;
    });
  }, [selectedType, selectedDepartment, searchQuery]);

  return (
    <div className="h-screen relative overflow-hidden flex flex-col">
      {/* Background gradients for Rudratek styling */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-brand-600/20 blur-[120px]" />
        <div className="absolute top-1/4 -right-40 h-96 w-96 rounded-full bg-brand-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-slate-800/50 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex flex-col h-full">
        {/* Header */}
        <header className="mb-8 flex-shrink-0 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between border-b border-slate-800/50 pb-6">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-lg shadow-brand-500/20">
              <BriefcaseBusiness className="h-6 w-6" />
            </div>
            <div>
              <h1 className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
                Rudratech Job Board
              </h1>
              <p className="text-sm text-slate-400">Find your next great opportunity</p>
            </div>
          </div>
          
          <div className="relative w-full sm:max-w-xs">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-5 w-5 text-slate-500" />
            </div>
            <input
              type="text"
              placeholder="Search jobs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full rounded-xl border border-slate-800 bg-slate-900/50 py-2.5 pl-10 pr-4 text-sm text-slate-200 placeholder-slate-500 backdrop-blur-md transition-all focus:border-brand-500 focus:bg-slate-900 focus:outline-none focus:ring-1 focus:ring-brand-500"
            />
          </div>
        </header>

        {/* Main Content */}
        <div className="flex flex-col gap-8 lg:flex-row flex-1 min-h-0">
          {/* Sidebar */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div>
              <Filters
                selectedType={selectedType}
                setSelectedType={setSelectedType}
                selectedDepartment={selectedDepartment}
                setSelectedDepartment={setSelectedDepartment}
              />
            </div>
          </aside>

          {/* Job List */}
          <main className="flex-1 overflow-y-auto overflow-x-hidden px-2 lg:px-6 pb-8 custom-scrollbar">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-slate-200">
                {filteredJobs.length} {filteredJobs.length === 1 ? 'Job' : 'Jobs'} Found
              </h2>
            </div>
            
            <motion.div 
              layout
              className="flex flex-col gap-4"
            >
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <JobCard key={job.id} job={job} onClick={setSelectedJob} />
                ))
              ) : (
                <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-700 py-20 text-center">
                  <BriefcaseBusiness className="h-12 w-12 text-slate-600 mb-4" />
                  <h3 className="text-lg font-medium text-slate-300">No jobs found</h3>
                  <p className="text-slate-500 mt-1 max-w-sm">
                    Try adjusting your filters or search query to find what you're looking for.
                  </p>
                  <button 
                    onClick={() => {
                      setSelectedType('All');
                      setSelectedDepartment('All');
                      setSearchQuery('');
                    }}
                    className="mt-6 text-brand-400 hover:text-brand-300 font-medium transition-colors"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </motion.div>
          </main>
        </div>
      </div>

      <JobModal job={selectedJob} onClose={() => setSelectedJob(null)} />
    </div>
  );
}

export default App;

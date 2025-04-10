import React from 'react';
import { Button } from './ui/button';
import { Bookmark } from 'lucide-react';
import { Avatar, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { useNavigate } from 'react-router-dom';

const Job = ({ job }) => {
  const navigate = useNavigate();

  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
    return Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  };

  return (
    <div className='p-5 rounded-md shadow-xl bg-white dark:bg-muted border border-gray-100 dark:border-gray-700 text-black dark:text-white'>
      {/* Header: Date & Bookmark */}
      <div className='flex items-center justify-between'>
        <p className='text-sm text-gray-500 dark:text-gray-400'>
          {daysAgoFunction(job?.createdAt) === 0 ? 'Today' : `${daysAgoFunction(job?.createdAt)} days ago`}
        </p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>

      {/* Company Info */}
      <div className='flex items-center gap-2 my-2'>
        <Button className="p-6" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src={job?.company?.logo} />
          </Avatar>
        </Button>
        <div>
          <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
          <p className='text-sm text-gray-500 dark:text-gray-400'>India</p>
        </div>
      </div>

      {/* Job Info */}
      <div>
        <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
        <p className='text-sm text-gray-600 dark:text-gray-300 line-clamp-3'>{job?.description}</p>
      </div>

      {/* Tags */}
      <div className='flex items-center gap-2 mt-4'>
        <Badge className={'text-blue-700 dark:text-blue-300 font-bold'} variant="ghost">
          {job?.position} Positions
        </Badge>
        <Badge className={'text-[#F83002] font-bold'} variant="ghost">
          {job?.jobType}
        </Badge>
        <Badge className={'text-[#7209b7] font-bold'} variant="ghost">
          {job?.salary} LPA
        </Badge>
      </div>

      {/* Actions */}
      <div className='flex items-center gap-4 mt-4'>
        <Button onClick={() => navigate(`/description/${job?._id}`)} variant="outline">
          Details
        </Button>
        <Button className="bg-[#7209b7] hover:bg-[#5a079f] text-white">
          Save For Later
        </Button>
      </div>
    </div>
  );
};

export default Job;

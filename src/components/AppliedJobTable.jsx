import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from './ui/table'
import { Badge } from './ui/badge'
import { useSelector } from 'react-redux'

const AppliedJobTable = () => {
  const { allAppliedJobs } = useSelector(store => store.job)

  return (
    <div className="bg-white dark:bg-muted rounded-md p-4 shadow-md">
      <Table>
        <TableCaption className="text-gray-500 dark:text-gray-400">
          A list of your applied jobs
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-gray-600 dark:text-gray-300">Date</TableHead>
            <TableHead className="text-gray-600 dark:text-gray-300">Job Role</TableHead>
            <TableHead className="text-gray-600 dark:text-gray-300">Company</TableHead>
            <TableHead className="text-right text-gray-600 dark:text-gray-300">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            allAppliedJobs.length <= 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center text-gray-500 dark:text-gray-400">
                  You haven't applied to any jobs yet.
                </TableCell>
              </TableRow>
            ) : (
              allAppliedJobs.map((appliedJob) => (
                <TableRow key={appliedJob._id} className="hover:bg-gray-100 dark:hover:bg-[#1e1e1e]">
                  <TableCell className="text-gray-700 dark:text-gray-300">
                    {appliedJob?.createdAt?.split("T")[0]}
                  </TableCell>
                  <TableCell className="text-gray-700 dark:text-gray-300">
                    {appliedJob.job?.title}
                  </TableCell>
                  <TableCell className="text-gray-700 dark:text-gray-300">
                    {appliedJob.job?.company?.name}
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge
                      className={`text-white ${
                        appliedJob?.status === "rejected"
                          ? 'bg-red-500'
                          : appliedJob.status === 'pending'
                          ? 'bg-gray-500'
                          : 'bg-green-600'
                      }`}
                    >
                      {appliedJob.status.toUpperCase()}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))
            )
          }
        </TableBody>
      </Table>
    </div>
  )
}

export default AppliedJobTable

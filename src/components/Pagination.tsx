import React from 'react';
import { Button } from './ui/button';
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    const handlePrev = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    return (
        <div className="flex justify-center items-center my-4 gap-4">
            <Button variant="outline" className="flex items-center gap-2" onClick={handlePrev} disabled={currentPage === 1}>
                <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
                Previous
            </Button>
            <div className="flex items-center gap-2">
                {currentPage}
            </div>
            <Button variant="outline" className="flex items-center gap-2" onClick={handleNext} disabled={currentPage === totalPages}>
                Next
                <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
            </Button>
        </div>
    );
};

export default Pagination;


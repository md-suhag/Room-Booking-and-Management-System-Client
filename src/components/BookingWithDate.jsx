"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Booking form schema
const BookingSchema = z.object({
  startDate: z
    .date({
      required_error: "Start date is required.",
    })
    .nullable(),
  endDate: z
    .date({
      required_error: "End date is required.",
    })
    .nullable(),
});

const BookingWithDate = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(BookingSchema),
    defaultValues: {
      startDate: null,
      endDate: null,
    },
  });

  // Handle form submission
  const onSubmit = (data) => {
    // Validate end date to be after start date manually
    if (data.startDate && data.endDate && data.startDate > data.endDate) {
      toast({
        title: "Error",
        description: "End date must be after start date.",
        variant: "destructive",
      });
      return;
    }

    // If validation passes, show success toast
    toast({
      title: "Booking Successful",
      description: `You booked from ${data.startDate.toDateString()} to ${data.endDate.toDateString()}`,
    });

    // Proceed with booking logic (e.g., API call)
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-6">
        <div className="flex gap-10">
          {/* Start Date */}
          <Controller
            name="startDate"
            control={control}
            render={({ field }) => (
              <div>
                <label className="block">Start Date</label>
                <DatePicker
                  selected={field.value}
                  onChange={(date) => {
                    setStartDate(date);
                    field.onChange(date);
                  }}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  minDate={new Date()}
                  placeholderText="Select start date"
                  className="input"
                />
                {errors.startDate && (
                  <p className="text-red-500">{errors.startDate.message}</p>
                )}
              </div>
            )}
          />

          {/* End Date */}
          <Controller
            name="endDate"
            control={control}
            render={({ field }) => (
              <div>
                <label className="block">End Date</label>
                <DatePicker
                  selected={field.value}
                  onChange={(date) => {
                    setEndDate(date);
                    field.onChange(date);
                  }}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate || new Date()}
                  placeholderText="Select end date"
                  className="input"
                />
                {errors.endDate && (
                  <p className="text-red-500">{errors.endDate.message}</p>
                )}
              </div>
            )}
          />
        </div>

        {/* Submit Button */}
        <Button type="submit">Confirm Booking</Button>
      </form>
    </div>
  );
};

export default BookingWithDate;

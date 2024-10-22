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
  startDate: z.date({
    required_error: "Start date is required.",
  }),
  endDate: z
    .date({
      required_error: "End date is required.",
    })
    .refine(
      (date, ctx) => {
        const { startDate } = ctx.parent;
        return startDate <= date;
      },
      { message: "End date must be after start date." }
    ),
});

const DatePicker = ({ room }) => {
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
    toast({
      title: "Booking Successful",
      description: `You booked from ${data.startDate.toDateString()} to ${data.endDate.toDateString()}`,
    });
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-6">
        {/* Start Date */}
        <Controller
          name="startDate"
          control={control}
          render={({ field }) => (
            <div>
              <label className="block">Start Date</label>
              <DatePicker
                selected={field.value}
                onChange={(date) => field.onChange(date)}
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
                onChange={(date) => field.onChange(date)}
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

        {/* Submit Button */}
        <Button type="submit">Confirm Booking</Button>
      </form>
    </div>
  );
};

export default DatePicker;

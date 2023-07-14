import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, FC } from "react";
import { cn } from "../utils";

const buttonVariants = cva(
  "active:scale-95 hover:scale-105 rounded-md flex items-center justify-center text-sm font-medium transition-all duration-100",
  {
    variants: {
      intent: {
        default: "bg-blue-500 text-white hover:bg-blue-300",
        outline: "border border-blue-500 text-white hover:text-slate-300",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-2 rounded-md",
      },
    },
    defaultVariants: {
      intent: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button: FC<ButtonProps> = ({ className, size, intent, ...props }) => {
  return (
    <button
      className={cn(buttonVariants({ intent, size, className }))}
      {...props}
    />
  );
};

export { Button, buttonVariants };

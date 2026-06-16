import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { useGameManager } from "../../hooks/useGameManager";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-none text-base font-black uppercase tracking-widest transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[3px] focus-visible:ring-black focus-visible:ring-offset-0 aria-invalid:border-destructive",
    {
        variants: {
            variant: {
                default:
                    "bg-white text-black border-4 border-black shadow-[6px_6px_0px_#000] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0px_#000] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none",
                warning:
                    "bg-yellow-400 text-black border-4 border-black shadow-[6px_6px_0px_#000] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0px_#000] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none",
                destructive:
                    "bg-red-400 text-black border-4 border-black shadow-[6px_6px_0px_#000] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0px_#000] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none",
            },
            size: {
                default: "h-12 px-4 has-[>svg]:px-3",
                sm: "h-8 gap-1.5 px-3 text-sm has-[>svg]:px-2.5",
                lg: "h-14 px-6 text-lg has-[>svg]:px-4",
                icon: "size-12",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    },
);

function Button({
    className,
    variant,
    size,
    asChild = false,
    onClick,
    ...props
}: React.ComponentProps<"button"> &
    VariantProps<typeof buttonVariants> & {
        asChild?: boolean;
    }) {
    const { playClickAudio } = useGameManager()
    const Comp = asChild ? Slot : "button";

    return (
        <Comp
            data-slot="button"
            className={cn(buttonVariants({ variant, size, className }))}
            onClick={(e) => {
                playClickAudio()
                onClick?.(e)
            }}
            {...props}
        />
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export { Button, buttonVariants };

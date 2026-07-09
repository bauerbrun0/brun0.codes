export function AnimatedUnderline({ text }: { text: string }) {
  return (
    <div className="group">
        <span
            className="bg-bottom-left bg-linear-to-r from-black to-black dark:from-white dark:to-white bg-size-[0%_2px]
                bg-no-repeat group-hover:bg-size-[100%_2px] transition-[background-size] duration-400 ease-out pb-1"
        >
            {text}
        </span>
    </div>
  );
}

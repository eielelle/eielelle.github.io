interface DividerProps {
    title: String
    number: String
}

function Divider({ title, number }: DividerProps) {
    return <div className="flex items-center gap-6">
        <h1><span className="text-accent text-xl">{number}.</span> <span className="text-3xl font-semibold">{title}</span></h1>
        <hr className="flex-1 my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
    </div>
}

export default Divider;
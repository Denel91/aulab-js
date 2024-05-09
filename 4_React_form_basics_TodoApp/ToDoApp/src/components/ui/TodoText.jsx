export default function TodoText ({text, isComplete}) {
    const className = isComplete ? 'line-through' : 'none';

    return (
        <span className={className}>
            {text}
        </span>
    );
}

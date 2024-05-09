export default function StatusCheckbox({isComplete, onChange}) {
    return (
            <input type="checkbox" checked={isComplete} onChange={onChange}/>
    );
}

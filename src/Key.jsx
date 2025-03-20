export function Key(props) {
    if (props.label.toLowerCase() === "shift"){
        console.log("This is running lol")
        return (
            <div className="key shift-key">
                <button key={props.key} className="key shift-key">
                    {props.label}
                </button>
            </div>
        )
    }
    else if (props.label.toLowerCase() === "space"){
        console.log("This is being run")
        return (
            <div className="key space-key">
                <button key={props.key} className="key space-key">
                    {props.label}
                </button>
            </div>
        )
    }
    console.log("Weirdly this is running")
    return (
        <div className="key">
            <button key={props.key} className="key">
                {props.label}
            </button>
        </div>
    )
}
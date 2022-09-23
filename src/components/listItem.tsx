import style from "./listItem.module.css";

export default function ListItem ({item, onClick} : {item:listItem, onClick: Function}) {
    return (
        <div className={style.container} onClick={() => onClick(item)}>
            {item.label}
        </div>
    );
}

export function NenhumResultado () {
    return (<div className={style.nenhumResultado}>Nenhum resultado encontrado!</div>);
}
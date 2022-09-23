import style from "./selectedItem.module.css";

export default function SelectedItem({item, onClick} : {item: listItem, onClick: Function}){

    return (
        <div className={style.container}>
            {item.label}
            <span className="material-symbols-outlined" onClick={() => onClick(item)}>close</span>
        </div>
    );

}
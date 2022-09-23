import { useState, useEffect } from "react"
import style from "./multipleSelect.module.css";
import SelectedItem from "./selectedItem";
import ListItem, {NenhumResultado} from "./listItem";
import data from "./data";

export default function MultipleSelect () {

    const [selectedItens, SetSelectedItens] = useState<listItem[]>([]);
    const [listedItens, SetListedItens] = useState<listItem[]>([]);
    const [searchString, SetSearchString] = useState("");

    useEffect(() => {
        search();
    }, [searchString]);

    async function search(){

        if(searchString === ""){
            SetListedItens([]);
            return;
        }

        let result:listItem[] = [];

        data.forEach((element:string) => {
            if(element.toUpperCase().startsWith(searchString.toUpperCase()))
            result.push({id: Math.random() + Date.now(), label: element, data: JSON.parse("{}")});
        });

        SetListedItens(result);

    }

    function select(item:listItem) {
        SetSelectedItens([...selectedItens, item]);
        SetSearchString("");
    }

    function unSelect(item:listItem){
        let index = selectedItens.findIndex((selectedItem) => selectedItem.id === item.id);

        if(index > -1){
            let tempList = selectedItens;
            tempList.splice(index, 1);

            SetSelectedItens([...tempList]);
        }
    }

    return (
        <div className={style.container}>   
            {
                selectedItens.map((item) => {
                    return <SelectedItem key={Math.random() + Date.now()} item={item} onClick={unSelect}/>
                })
            }       
            <input className={style.input} placeholder="Search..." value={searchString} onChange={(e) => SetSearchString(e.target.value)}/>
            <div className={style.datalist} onMouseDown={(e) => e.preventDefault()}>
                {
                    searchString !== "" && listedItens.length === 0 ?
                        <NenhumResultado/>
                    :
                    listedItens.map((item) => {
                        return <ListItem key={Math.random() + Date.now()} item={item} onClick={select}/>
                    })
                }
            </div>
        </div>
    )
}
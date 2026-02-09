import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem,
    addItem: (item: MenuItem) => void
}

export default function MenuItem({item, addItem} : MenuItemProps) {
  return (
    <div>
      <button
        className="border-2 border-teal-400 w-full hover:bg-teal-100 p-5 rounded-lg flex items-center justify-between"
        onClick={()=> addItem(item)}
      >
        <p>{item.name}</p> 
        <p className="font-black">${item.price}</p> 
      </button>
    </div>
  )
}

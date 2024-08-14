import {Dispatch, SetStateAction, useState} from 'react'
import Icon from '../../molecules/Icon/Icon';
import SidebarButton from '../../molecules/SidebarButton/SidebarButton';


export interface AppProps {
    active: boolean | null ;
    setActive: Dispatch<SetStateAction<boolean>>;
}

export default function SidebarMenu(props: AppProps) {
  const [buttonOnFocus, setButtonOnFocus] = useState('warehouse')
  const {active, setActive} = props;

  
  return (
    <aside className={`absolute bg-primary w-20 h-full transition-all duration-1000 ${props.active ? 'opacity-100 left-0' : 'opacity-0 -left-20'} grid grid-cols-1 grid-rows-[5rem,auto] justify-center justify-items-center items-center`}>
      <Icon></Icon>
      <div className='bg-primary h-80 w-full flex flex-col justify-center gap-1'>
        <SidebarButton alt='warehouse'src='warehouse.svg' focusIcon='warehouse_active.svg' buttonOnFocus={buttonOnFocus}  onClick={() => {
          setButtonOnFocus('warehouse');
          setActive((prev) => !prev);
          
          }}/>
        <SidebarButton alt='calculator' src='calculator.svg' focusIcon='calculator_active.svg' buttonOnFocus={buttonOnFocus} onClick={() => setButtonOnFocus('calculator')}/>
        <SidebarButton alt='history' src='history.svg' focusIcon='history_active.svg' buttonOnFocus={buttonOnFocus} onClick={() => setButtonOnFocus('history')}/>
        <SidebarButton alt='profile' src='profile.svg' focusIcon='profile_active.svg' buttonOnFocus={buttonOnFocus} onClick={() => setButtonOnFocus('profile')}/>
      </div>
    </aside>
  )
}

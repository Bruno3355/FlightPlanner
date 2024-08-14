import {ComponentProps} from 'react'
import Image from 'next/image';

export interface AppProps extends ComponentProps<'button'> {
    children?: any,
    alt: string,
    src: string,
    focusIcon: string,
    buttonOnFocus: string
}

export default function SidebarButton(props: AppProps) {
    const currentPageSelected = () => {
        return props.buttonOnFocus !== props.alt;
    }


  return (
    <button className={`w-full h-[4rem] bg-primary ${props.buttonOnFocus !== props.alt ? '' : 'from-accent/30 to-accent/0'} bg-gradient-to-r grid grid-cols-[4px,auto] place-items-center`} onClick={props.onClick}>

        {!currentPageSelected() ? (
        <div className='w-full h-full bg-accent rounded-r-2xl'></div>
        ): <div></div>}



{props.buttonOnFocus !== props.alt ? <Image src={props.src} alt={props.alt} className='columns-2 w-auto h-auto' width={30} height={32}/>    : <Image src={props.focusIcon} alt={props.alt} className='columns-2 w-auto h-auto' width={30} height={32}/>    }  
    </button>
  )
}

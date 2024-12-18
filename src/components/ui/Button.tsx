interface ButtonProps{
    text:string;
    variant: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'white'
}

export const Button = ({text, variant}:ButtonProps) => {
  return (
    <button 
        style={variantstyles[variant]}
        className='px-10 py-2 rounded-3xl text-[] font-bold shadow-md'>
      {text}
    </button>
  )
}


const variantstyles={
    primary:{
        border: '2px solid #ffffff',
        color: '#FFFFFF',
        backgroundColor: '#E00A0A',
    },
    secondary:{
        border: 'none',
        color: '#FFFFFF',
        backgroundColor: 'transparent',
    },
    tertiary:{
        border: '2px solid #0A2640',
        color: '#0A2640',
        backgroundColor: 'transparent',
    },
    white:{
        border: '2px solid #0A2640',
        color: '#0A2640',
        backgroundColor: 'white',
    },
    outline:{
        border: '2px solid #E00A0A',
        color: '#E00A0A',
        backgroundColor: 'transparent',
    },
}

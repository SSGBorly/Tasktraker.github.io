import { useState } from "react"

const Addtask = ({ onAdd }) => {
    const [name, setName] = useState('')
    const [planet, setPlanet] = useState('')
    const [dead, setDead] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!name) {
            alert('Please add Name')
            return
        }

        onAdd({ name, planet, dead })

        setName('')
        setPlanet('')
        setDead(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label htmlFor="">Name</label>
                <input type="text" placeholder='Add Name' value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className='form-control'>
                <label htmlFor="">Planet</label>
                <input type="text" placeholder='Add Planet' value={planet} onChange={(e) => setPlanet(e.target.value)} />
            </div>
            <div className='form-control form-control-check'>
                <label htmlFor="">Dead or Alive</label>
                <input type="checkbox" value={dead} onChange={(e) => setDead(e.currentTarget.checked)} />
            </div>

            <input className='btn btn-block' type="submit" value='Save Person' />
        </form>
    )
}

export default Addtask

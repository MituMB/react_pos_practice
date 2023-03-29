import React from 'react'

const LanguageSetting = () => {
  return (
    <div className="">
   <h2>Language & region</h2>
    <form className="pt-2">
    <div className="form-control">
        <label>Language</label>
        <select name="" id="">
            <option value="Bengali">Bengali</option>
            <option value="English">English</option>
        </select>
    </div>
    <div className="form-control">
        <label>Region</label>
        <select name="" id="">
            <option value="Bengali">Us</option>
            <option value="English">England</option>
        </select>
    </div>

   
    <button className="btn btn-secondary">Save Changes</button>
    </form>
</div>
  )
}

export default LanguageSetting
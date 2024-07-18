const Page = () => {
  const handleForm =async (formData:any) => {
    "use server"
    console.log(formData)
    console.log('salam ')
  }
return(
<div>
 <form action={handleForm}>
        <input type="text" name="username"  />
        <button >Send</button>
      </form>
    </div>
)
}


export default Page

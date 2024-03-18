export default function SignIn() {
  return (
    <main
      className='
    w-screen h-screen 
    flex items-center 
    justify-center 
    flex-col'
    >
      <form
        className='
      flex 
      justify-between 
      flex-col 
      gap-3 
      w-80 
      mb-3'
      >
        <h1 className='text-white text-center text-2xl'>Sistema de Login</h1>
        <div className='flex flex-col'>
          <label className='text-white' htmlFor=''>
            Endereço de e-mail
          </label>
          <input
            className='py-2 px-2 text-white bg-slate-500 rounded-sm outline-yellow-500'
            type='text'
          />
        </div>
        <div className='flex flex-col'>
          <label className='text-white' htmlFor=''>
            Senha
          </label>
          <input
            className='py-2 px-2 text-white rounded-sm bg-slate-500 outline-yellow-500'
            type='text'
          />
        </div>
        <button className='bg-yellow-500 text-white py-2 rounded-sm mt-2'>
          Entrar
        </button>
      </form>
      <div className='flex gap-2'>
        <span className='text-white'>Não é membro?</span>
        <a className='text-yellow-500' href='/'>
          Faça seu cadastro agora
        </a>
      </div>
    </main>
  );
}

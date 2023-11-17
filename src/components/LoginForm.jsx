import React from 'react'

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   
    const handleSubmit = (e) => {
       e.preventDefault();
       if (password !== confirmPassword) {
         alert('Passwords do not match');
       } else {
         // Submit the form
         console.log('Submitted', { email, password });
       }
    };

  return (
    <div>
        <form className=''onSubmit={handleSubmit}>
            <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2" for="email">
                  Email
                  </label>
                  <input type="text" className="rounded w-full py-2 px-3 text-gray-700 " id="username" placeholder="name@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>

              <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                  Password
                  </label>
                  <input type="password" className="rounded w-full py-2 px-3 text-gray-700 mb-3 " id="password" placeholder="Minimal 8 Karakter" value={password} onChange={(e) => setPassword(e.target.value)}/>
              </div>

              <div>
                <button classNameName="" type="submit" >
                  Sign In
                </button>
              </div>

              <p className="mt-4 text-sm text-gray-600">Baru Mengenal HairHub? <a href="#" className="text-blue-500">Daftar Segera</a></p>
        </form>
    </div>
  )
};

export default LoginForm
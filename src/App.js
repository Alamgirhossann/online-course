import logo from './logo.svg';
import './App.css';
import Courses from './components/Courses/Courses';
import { useEffect, useState } from 'react';
import Cart from './components/Cart/Cart';
import { FakeData } from './components/FakeData/FakeData.js'

function App() {
  const [course, setCourse] = useState([]);
  const [cart, setCart] = useState([]);

  const handleAddPrice = (course) => {
    const newCart = [...cart, course]
    setCart(newCart);
  }

  useEffect(() => {
    setCourse(FakeData)
  }, [])

  return (
    <div className='main-div'>
      <h1 className='heading'>This is the best site for online courses</h1>
      <div className='courses-div'>
        <div className='course-info'>

          <ul>
            {
              course.map(course => <Courses
                key={course.id}
                course={course}
                handleAddPrice={handleAddPrice}
              ></Courses>)
            }
          </ul>
        </div>
        <div className='cart'>
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
}

export default App;

// import logo from './logo.svg';
import './App.css';
import Layout from './component/layout/Layout'
import PostList from './component/posts/PostList'
import thumImage from './images/jung.png'
import thumImage2 from './images/jung2.png'
const DUMMY_POSTS = [
  {
    id: 'm1',
    image : thumImage,
    title: 'A First Posting1',
    description: 'Some address 5, 12345 Some City',
    date: '11:09 PM - 1 Jan 2016',
    keyword : 'java'
  },
  {
    id: 'm2',
    image : thumImage2,
    title: 'A First Posting2',
    description: 'Some address 5, 12345 Some City',
    date: '11:09 PM - 1 Jan 2016',
    keyword : 'mysql'
  }, 
  {
    id: 'm3',
    image :  thumImage,
    title: 'A First Posting3',
    description: 'Some address 5, 12345 Some City',
    date: '11:09 PM - 1 Jan 2016',
    keyword : 'java'
  },
  {
    id: 'm4',
    image :  thumImage2,
    title: 'A First Posting4',
    description: 'Some address 5, 12345 Some City',
    date: '11:09 PM - 1 Jan 2016',
    keyword : 'mysql'
  }, 
  {
    id: 'm5',
    image :  thumImage,
    title: 'A First Posting5',
    description: 'Some address 5, 12345 Some City',
    date: '11:09 PM - 1 Jan 2016',
    keyword : 'java'
  },
  {
    id: 'm6',
    image :  thumImage,
    title: 'A First Posting6',
    description: 'Some address 5, 12345 Some City',
    date: '11:09 PM - 1 Jan 2016',
    keyword : 'mysql'
  }, 
  {
    id: 'm7',
    image :  thumImage2,
    title: 'A First Posting7',
    description: 'Some address 5, 12345 Some City',
    date: '11:09 PM - 1 Jan 2016',
    keyword : 'java'
  },
  {
    id: 'm8',
    image :  thumImage,
    title: 'A First Posting8',
    description: 'Some address 5, 12345 Some City',
    date: '11:09 PM - 1 Jan 2016',
    keyword : 'mysql'
  }, 
];

function App(props) {
  return (
    <Layout>
      <PostList posts={DUMMY_POSTS} />
    </Layout>  
  );
}
// export async function getStaticProps(){
//   return {
//     props : {
//       posts : DUMMY_POSTS
//     },
//     revalidate : 1
//   };
// }
export default App;

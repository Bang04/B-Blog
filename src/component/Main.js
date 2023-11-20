import PostList from '../component/pages/PostList'

const DUMMY_POSTS = [
    {
      id: 'm1',
      title: 'A First Posting1',
      description: 'Some address 5, 12345 Some City',
      date: '2023년 09월 2일',
      keyword : 'java'
    },
    {
        id: 'm2',
        title: 'A First Posting2',
        description: 'Some address 5, 12345 Some City',
        date: '2023년 10월 14일',
        keyword : 'mysql'
      }, {
        id: 'm3',
        title: 'A First Posting3',
        description: 'Some address 5, 12345 Some City',
        date: '2023년 11월 11일',
        keyword : 'html'
      }, {
        id: 'm4',
        title: 'A First Posting4',
        description: 'Some address 5, 12345 Some City',
        date: '2023년 11월 20일',
        keyword : 'css'
      },
];

function Main(props){
    return  <PostList posts={props.posts} />;
}
export async function getStaticProps(){

  return {
    props: {
      posts : DUMMY_POSTS
    },
  } 
}
export default Main;

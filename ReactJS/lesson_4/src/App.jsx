import React from 'react';
import ReactDOM from 'react-dom';
import Blog from './app/components/Blog';
import WelcomeModal from './app/components/WelcomeModal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          'userName': 'Andrey',
          'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
          'body': 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut' +
            ' quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
        },
        {
          'userName': 'Vasya',
          'title': 'qui est esse',
          'body': 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat' +
            ' blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'
        },
        {
          'userName': 'Anna',
          'title': 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
          'body': 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel' +
            ' accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut'
        },
        {
          'userName': 'Tanya',
          'title': 'eum et est occaecati',
          'body': 'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis' +
            ' hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit'
        },
        {
          'userName': 'John',
          'title': 'nesciunt quas odio',
          'body': 'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus' +
            ' esse voluptatibus quis\nest aut tenetur dolor neque'
        },
        {
          'userName': 'Nick',
          'title': 'dolorem eum magni eos aperiam quia',
          'body': 'ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid' +
            ' molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae'
        },
        {
          'userName': 'AJ',
          'title': 'magnam facilis autem',
          'body': 'dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat' +
            ' excepturi ut quia\nsunt ut sequi eos ea sed quas'
        },
        {
          'userName': 'Duck',
          'title': 'dolorem dolore est ipsam',
          'body': 'dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus' +
            ' cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae'
        },
        {
          'userName': 'Donald',
          'title': 'nesciunt iure omnis dolorem tempora et accusantium',
          'body': 'consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut' +
            ' quod' +
            ' aut provident voluptas autem voluptas'
        },
        {
          'userName': 'Vladimir',
          'title': 'optio molestias id quia eum',
          'body': 'quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam' +
            ' quod sed accusamus veritatis error'
        }
      ]
    };
    this.addPost = this.addPost.bind(this);
  }
  
  addPost(post) {
    this.setState({posts: this.state.posts.concat(post)})
  }
  
  render() {
    return (
      <div className='container my-3'>
        <WelcomeModal />
        <Blog posts={ this.state.posts } addPost={this.addPost}/>
      </div> );
  }
}

ReactDOM.render(<App/>, document.querySelector('#root'));

import React, { Component } from 'react'
import { connect } from 'react-redux';
import newsOperation from '../../redux/news/newsOperation';
import newsSelector from '../../redux/news/newsSelector';
import style from './style.module.scss';
import {CSSTransition,TransitionGroup} from 'react-transition-group'
import newsItemTransition from './transition/newsItemTransition.module.css'


const shortid = require('shortid');
class News extends Component {

    componentDidMount(){
        this.props.fetchContent();
    }
    render(){
        const {newsAddContent} = this.props
        console.log(newsAddContent);
    return(
        <>
              <TransitionGroup component='ul'className={style} >
            {
                newsAddContent.map(item => 
                    <CSSTransition 
                            in={true} 
                            key={shortid.generate()} 
                            classNames={newsItemTransition}
                            timeout={500}
                            unmountOnExit
                            >
                <li  className={style.news_item}>
                    <img className={style.news_images} alt={item.description}src={item.urlToImage} width='100'/>
                    <a className={style.news_link} href={item.url}> {item.title} </a>
                </li>
                </CSSTransition>)
            }
            </TransitionGroup>
        </>
    )
  }   
}

const mapStateToProps = state => ({
    newsAddContent:newsSelector.getVisibleNews(state)
})

const mapDispatchToProps = {
    fetchContent:newsOperation.fetchNewsArr
}

export default connect(mapStateToProps,mapDispatchToProps)(News);
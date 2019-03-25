import React from 'react';
import { View } from 'react-native';
import { RouteComponentProps } from 'react-router';
import HeaderMain from '../../web/HeaderMain';
import NewsComponent from './News';
interface Props {
}

class News extends React.Component<Props & RouteComponentProps> {
    pushDetails = (id:string, title:string) => {
        this.props.history.push(`/news/${id}`)
    }
    render () {
        const {history} = this.props
        return ( 
            <View>
                <HeaderMain 
                    goLogin={() => {history.push('/login')}}
                    goMenu={() => {}}
                    title="Noticias" 
                />
                <NewsComponent pushDetails={this.pushDetails} />
            </View>
        )
    }
}

export default News

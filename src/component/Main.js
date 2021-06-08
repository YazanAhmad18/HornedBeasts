import React from 'react';
import HornedBeasts from './HornedBeasts';
import hornedBeasts from './data.json'


class Main extends React.Component {

    render(){
        
        return(
            <div>
            
            
            {
                    hornedBeasts.map((beast) => {
                        return (
                            <HornedBeasts
                                imageUrl = {beast.image_url}
                                title = {beast.title}
                                description = {beast.description}
                                keyword = {beast.keyword}
                            />
                        )
                    })
                }
            
            
          


            </div>
        )
    }
}
export default Main
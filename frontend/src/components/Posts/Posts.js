import React from 'react'
import Post from './Post/Post'

import {Grid, CircularProgress} from '@material-ui/core'
import {useSelector} from 'react-redux'

import useStyles from './Styles'

const Posts = () => {
    const classes = useStyles()
    const posts = useSelector(state => state.posts)
    console.log(posts)

    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {
                    posts.map(post => (
                        <Grid item key={post.id} xs={12}>
                            <Post post={post} />
                        </Grid>
                    ))
                }
            </Grid>
        )
    )
}

export default Posts

import React, { Component } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default class Dashboard extends Component {
  render() {
    return (
      <div>

        <Grid container spacing={2}>

            <Grid item xs={6}>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Income
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={6}>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Expense
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

        </Grid>

      </div>
    )
  }
}

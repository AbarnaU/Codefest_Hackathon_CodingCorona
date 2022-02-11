import React, { Component } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

export default class Dashboard extends Component {
  render() {
    return (
      <div>

        <Grid container spacing={2}>

            <Grid item xs={6}>
                <Link href="/income" underline="always">
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Income
                        </Typography>
                    </CardContent>
                </Card>
            </Link>
            </Grid>

            <Grid item xs={6}>
                <Link href="/expense" underline="always">
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Expense
                        </Typography>
                    </CardContent>
                </Card>
                </Link>
            </Grid>

            <Grid item xs={12}>
                <Link href="/recurring" underline="always">
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Recurring Payments
                        </Typography>
                    </CardContent>
                </Card>
                </Link>
            </Grid>
        </Grid>

      </div>
    )
  }
}

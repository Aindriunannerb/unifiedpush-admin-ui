import { PushApplication } from '@aerogear/unifiedpush-admin-client';
import React, { Component } from 'react';
import { Divider, Grid, GridItem, Text, Title } from '@patternfly/react-core';

interface Props {
  apps: PushApplication[];
}

export class GeneralStats extends Component<Props> {
  render() {
    return (
      <div className={'apps-dashboard'}>
        <Title
          headingLevel="h1"
          size="md"
          style={{ paddingTop: 51, paddingLeft: 20, paddingBottom: 21 }}
        >
          General Statistics
        </Title>
        <Divider />
        <Grid style={{ paddingLeft: 20, paddingTop: 20 }}>
          <GridItem sm={4}>
            <div>
              <Text className={'ups-count'}>{this.props.apps.length}</Text>
              <Text className={'ups-count-label'}>Apps</Text>
            </div>
          </GridItem>
          <GridItem sm={4}>
            <div>
              <Text className={'ups-count'}>
                {this.props.apps.reduce(
                  (res: number, app: PushApplication) =>
                    (app.activity ?? 0) + res,
                  0
                )}
              </Text>
              <Text className={'ups-count-label'}>Messages</Text>
            </div>
          </GridItem>
          <GridItem sm={4}>
            <div>
              <Text className={'ups-count'}>
                {this.props.apps.reduce(
                  (res: number, app: PushApplication) =>
                    (app.deviceCount ?? 0) + res,
                  0
                )}
              </Text>
              <Text className={'ups-count-label'}>Devices</Text>
            </div>
          </GridItem>
        </Grid>
      </div>
    );
  }
}

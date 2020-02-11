import React from 'react';
import { action } from '@storybook/addon-actions';
// import { storiesOf } from '@storybook/react';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
};

// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)

export const ContainedPrimary = () => <Button onClick={action('Clicked!')} appearance="primary" variant="contained">Contained Primary</Button>;
export const OutlinedPrimary = () => <Button onClick={action('Clicked!')} appearance="primary" variant="outlined">Outlined Primary</Button>;
export const TextPrimary = () => <Button onClick={action('Clicked!')} appearance="primary" variant="text">Text Primary</Button>;

export const ContainedSecondary = () => <Button onClick={action('Clicked!')} appearance="secondary" variant="contained">Contained Secondary</Button>;
export const OutlinedSecondary = () => <Button onClick={action('Clicked!')} appearance="secondary" variant="outlined">Outlined Secondary</Button>;
export const TextSecondary = () => <Button onClick={action('Clicked!')} appearance="secondary" variant="text">Text Secondary</Button>;

export const ContainedSuccess = () => <Button onClick={action('Clicked!')} appearance="success" variant="contained">Contained Success</Button>;
export const OutlinedSuccess = () => <Button onClick={action('Clicked!')} appearance="success" variant="outlined">Outlined Success</Button>;
export const TextSuccess = () => <Button onClick={action('Clicked!')} appearance="success" variant="text">Text Success</Button>;

export const ContainedWarning = () => <Button onClick={action('Clicked!')} appearance="warning" variant="contained">Contained Warning</Button>;
export const OutlinedWarning = () => <Button onClick={action('Clicked!')} appearance="warning" variant="outlined">Outlined Warning</Button>;
export const TextWarning = () => <Button onClick={action('Clicked!')} appearance="warning" variant="text">Text Warning</Button>;

export const ContainedDanger = () => <Button onClick={action('Clicked!')} appearance="danger" variant="contained">Contained Danger</Button>;
export const OutlinedDanger = () => <Button onClick={action('Clicked!')} appearance="danger" variant="outlined">Outlined Danger</Button>;
export const TextDanger = () => <Button onClick={action('Clicked!')} appearance="danger" variant="text">Text Danger</Button>;

export const Small = () => <Button onClick={action('Clicked!')}>Small</Button>;
export const Medium = () => <Button onClick={action('Clicked!')}>Medium</Button>;
export const Large = () => <Button onClick={action('Clicked!')}>Large</Button>;

export const Disabled = () => <Button onClick={action('Clicked!')} disabled>Disabled</Button>;

export const WithStartIcon = () => <Button onClick={action('Clicked!')} startIcon="👻">With Start Icon</Button>;
export const WithEndIcon = () => <Button onClick={action('Clicked!')} endIcon="👻">With End Icon</Button>;

export const Block = () => <Button onClick={action('Clicked!')} block>Block</Button>

export const LoadingState = () => <Button onClick={action('Clicked!')} loading>Loading State</Button>

export const Default = () => <Button onClick={action('Clicked!')}>Default</Button>;
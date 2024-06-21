# Options Strategy App

This project is a React application that generates a risk & reward graph for options strategies. It accepts up to four options contracts as input and provides a visual representation of the potential profit or loss at different prices of the underlying asset at the time of expiry. The application also calculates the maximum profit, maximum loss, and break-even points for the options strategy.

## Features

- **Risk & Reward Graph**: Visualize the profit or loss at various prices of the underlying asset at expiry.
- **Summary Statistics**: Display the maximum profit, maximum loss, and break-even points.
- **Responsive Design**: Ensure the graph is displayed correctly on different devices.

## Overview

This application generates a risk & reward graph for options strategies. It accepts an input of up to four options contracts and outputs:

- A risk & reward graph where X is the price of the underlying at the time of expiry and Y is the profit/loss at that price.
- Max profit, max loss, and all break-even points.

### Description of Key Files

-   `src/components/OptionsGraph.js`: The component responsible for rendering the risk & reward graph.
-   `src/utils/optionsUtils.js`: Utility functions for calculating profit/loss, generating graph data, and calculating summary statistics.
-   `src/data/sampleData.js`: Sample data for the options contracts.

### Prerequisites

Make sure you have Node.js (14 or higher) and npm (or Yarn) installed on your machine.




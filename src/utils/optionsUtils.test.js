import { calculateProfitLoss, generateGraphData, calculateSummary } from './optionsUtils';
import { sampleData } from '../data/sampleData';

test('calculateProfitLoss for Call option', () => {
    const option = {
        strike_price: 100,
        type: 'Call',
        bid: 10,
        ask: 12,
        long_short: 'long'
    };
    const priceAtExpiry = 110;
    expect(calculateProfitLoss(option, priceAtExpiry)).toBe(110 - 100 - 12);
});

test('generateGraphData structure', () => {
    const graphData = generateGraphData(sampleData);
    expect(graphData).toHaveProperty('labels');
    expect(graphData).toHaveProperty('datasets');
    expect(graphData.labels.length).toBe(101); // price range 50-150
    expect(graphData.datasets[0].data.length).toBe(101);
});

test('calculateSummary structure', () => {
    const summary = calculateSummary(sampleData);
    expect(summary).toHaveProperty('maxProfit');
    expect(summary).toHaveProperty('maxLoss');
    expect(summary).toHaveProperty('breakEvenPoints');
});

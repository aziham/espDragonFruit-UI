import ChartStreaming from '@aziham/chartjs-plugin-streaming';
import {
  Chart,
  ChartConfiguration,
  ChartType,
  Filler,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  Title,
  Tooltip
} from 'chart.js';
import 'chartjs-adapter-luxon';
import { useEffect, useRef } from 'react';

// Register the components globally
Chart.register(
  LineController,
  Filler,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  ChartStreaming
);

type SystemUsageChartProps = {
  className?: string;
};

export function SystemUsageChart({ className }: SystemUsageChartProps) {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext('2d');
    if (!ctx) return;

    // Destroy existing chart if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
      chartInstance.current = null;
    }

    const config: ChartConfiguration = {
      type: 'line' as ChartType,
      data: {
        datasets: [
          {
            label: 'CPU Usage (%)',
            data: [],
            borderColor: 'rgb(59, 130, 246)',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            fill: true,
            tension: 0.4,
            borderWidth: 2,
            pointRadius: 0,
            pointHoverRadius: 4
          },
          {
            label: 'RAM Usage (%)',
            data: [],
            borderColor: 'rgb(168, 85, 247)',
            backgroundColor: 'rgba(168, 85, 247, 0.1)',
            fill: true,
            tension: 0.4,
            borderWidth: 2,
            pointRadius: 0,
            pointHoverRadius: 4
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: false,
        interaction: {
          mode: 'index',
          intersect: false
        },
        plugins: {
          title: {
            display: true,
            text: 'System Usage Monitor',
            color: 'rgb(156, 163, 175)',
            font: {
              size: 16,
              weight: 'normal'
            }
          },
          legend: {
            display: true,
            position: 'top',
            labels: {
              color: 'rgb(156, 163, 175)',
              usePointStyle: true,
              padding: 20
            }
          },
          tooltip: {
            mode: 'index',
            intersect: false,
            backgroundColor: 'rgba(17, 24, 39, 0.9)',
            titleColor: 'rgb(243, 244, 246)',
            bodyColor: 'rgb(156, 163, 175)',
            borderColor: 'rgb(55, 65, 81)',
            borderWidth: 1
          }
        },
        scales: {
          x: {
            type: 'realtime',
            realtime: {
              duration: 60000,
              refresh: 1000,
              delay: 800,
              frameRate: 15,
              onRefresh: (chart) => {
                const now = Date.now();

                // Generate realistic CPU usage (20-90%)
                const cpuUsage = Math.random() * 70 + 20;

                // Generate realistic RAM usage (30-80%)
                const ramUsage = Math.random() * 50 + 30;

                chart.data.datasets[0].data.push({
                  x: now,
                  y: cpuUsage
                });

                chart.data.datasets[1].data.push({
                  x: now,
                  y: ramUsage
                });
              }
            },
            time: {
              displayFormats: {
                second: 'HH:mm:ss'
              }
            },
            grid: {
              color: 'rgba(55, 65, 81, 0.3)'
            },
            ticks: {
              // display: false,
              color: 'rgb(156, 163, 175)'
            }
          },
          y: {
            min: 0,
            max: 100,
            title: {
              display: true,
              text: 'Usage (%)',
              color: 'rgb(156, 163, 175)'
            },
            grid: {
              color: 'rgba(55, 65, 81, 0.3)'
            },
            ticks: {
              color: 'rgb(156, 163, 175)',
              callback: (value) => value + '%'
            }
          }
        }
      }
    };

    try {
      chartInstance.current = new Chart(ctx, config);
    } catch (error) {
      console.error('Error initializing chart:', error);
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
        chartInstance.current = null;
      }
    };
  }, []);

  return (
    <div
      className={`w-full h-96 bg-gray-900 rounded-lg p-4 ${className || ''}`}
    >
      <canvas ref={chartRef} />
    </div>
  );
}

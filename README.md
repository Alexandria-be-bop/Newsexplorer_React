# News Explorer

A React-based news application that allows users to search for news articles and save their favorites. The app features user authentication, responsive design, and integration with the News API.

## Live Demo

**[View the deployed application](https://alexandria-be-bop.github.io/Newsexplorer_React/)**

## Technologies Used

- **Frontend Framework**: React 19.1.0
- **Build Tool**: Vite 7.0.4
- **Routing**: React Router DOM 7.8.0
- **Styling**: CSS3 with Flexbox and Grid layouts
- **API Integration**: News API for article fetching
- **Authentication**: JWT token-based authentication
- **Deployment**: GitHub Pages
- **Development Tools**: ESLint, Prettier

## Features

- **News Search**: Search for articles by keywords with date filtering
- **User Authentication**: Register and login functionality
- **Save Articles**: Bookmark articles for later reading
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Saved Articles Page**: View all saved articles with keyword analysis
- **Modal Forms**: Clean login and registration interfaces
- **Error Handling**: Comprehensive error handling for API calls

## Responsive Design

The application is fully responsive and optimized for:
- Desktop (1024px and above)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Alexandria-be-bop/Newsexplorer_React.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd Newsexplorer_React
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

### Development

1. **Start the development server**
   ```bash
   npm run dev
   ```

2. **Open your browser**
   The application will automatically open at `http://localhost:5173`

### Building for Production

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Preview the production build**
   ```bash
   npm run preview
   ```

## Deployment

The application is automatically deployed to GitHub Pages using the `gh-pages` package.

### Manual Deployment

1. **Build and deploy**
   ```bash
   npm run deploy
   ```

This command will:
- Build the project for production (`npm run build`)
- Deploy the `dist` folder to the `gh-pages` branch
- Make the site available at the GitHub Pages URL

### Deployment URL

The application is deployed at: **https://alexandria-be-bop.github.io/Newsexplorer_React/**

## 📁 Project Structure

```
src/
├── components/         # React components
│   ├── App/            # Main application component
│   ├── Header/         # Site header with navigation
│   ├── Main/           # Main content area
│   ├── SearchForm/     # Search input component
│   ├── SearchResults/  # News articles display
│   ├── NewsCard/       # Individual article card
│   ├── SavedArticles/  # Saved articles page
│   ├── Navigation/     # Desktop navigation
│   ├── NavigationMobile/ # Mobile navigation
│   ├── LoginModal/     # Login form modal
│   ├── RegisterModal/  # Registration form modal
│   └── ModalWithForm/  # Reusable modal component
├── utils/              # Utility functions
│   ├── auth.js         # Authentication functions
│   ├── userApi.js      # User-related API calls
│   ├── newsApi.js      # News API integration
│   ├── apiCheck.js     # API response validation
│   └── constants.js    # Application constants
└── index.js            # Application entry point
```

## Configuration

### Environment Variables

The application uses environment variables for API configuration:

- `VITE_NEWS_API_KEY`: Your News API key (required for production)

### API Integration

- **Development**: Uses `nomoreparties.co` proxy server to avoid CORS issues
- **Production**: Direct integration with News API using HTTP headers

## Key Features Implementation

### Authentication
- JWT token-based authentication
- Secure login/logout functionality
- User session management

### News Search
- Real-time article search
- Date range filtering (last 7 days)
- Pagination support
- Error handling for API failures

### Article Management
- Save/unsave articles functionality
- Persistent storage of saved articles
- Keyword analysis for saved articles

### Responsive Design
- Mobile-first approach
- Flexible layouts using CSS Grid and Flexbox
- Optimized for all screen sizes

## Troubleshooting

### Common Issues

1. **CORS Errors**: The development environment uses a proxy server to handle CORS issues
2. **API Key Issues**: Ensure your News API key is properly configured
3. **Build Errors**: Make sure all dependencies are installed with `npm install`

### Development Tips

- Use `npm run lint` to check for linting errors
- The application uses ESLint for code linting
- All components follow React best practices

## Author

**Liam** - News Explorer React Application

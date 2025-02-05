import React, { useState, useEffect } from 'react';
import { 
  Card, 
  CardMedia, 
  CardContent, 
  Typography,  
  Box,
  useTheme,
  CardActions,
  Collapse,
  useMediaQuery
} from '@mui/material';
import { styled } from '@mui/material/styles';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { Properties } from "../../types";


// Definimos los breakpoints para el responsive
const BREAKPOINTS = {
  xs: 550,
  sm: 750,
  md: 850,
};

interface CarouselProps {
  properties: Properties[];
}

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
  }

  const ExpandMore = styled((props: ExpandMoreProps) => {
    const {  ...other } = props;
    return <IconButton {...other} />;
  })(({ theme }) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    variants: [
      {
        props: ({ expand }) => !expand,
        style: {
          transform: 'rotate(0deg)',
        },
      },
      {
        props: ({ expand }) => !!expand,
        style: {
          transform: 'rotate(180deg)',
        },
      },
    ],
  }));

const PropertyCarousel: React.FC<CarouselProps> = ({ properties }) => {

  const [expanded, setExpanded] = useState(false);

  const handleExpandedClick = () => {
    setExpanded(!expanded);
  }

  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(6);

  // Utilizamos useMediaQuery de Material UI para el responsive
  const isXs = useMediaQuery(theme.breakpoints.down(BREAKPOINTS.xs));
  const isSm = useMediaQuery(theme.breakpoints.down(BREAKPOINTS.sm));
  const isMd = useMediaQuery(theme.breakpoints.down(BREAKPOINTS.md));

  useEffect(() => {
    if (isXs) {
      setCardsToShow(2);
    } else if (isSm) {
      setCardsToShow(3);
    } else if (isMd) {
      setCardsToShow(4);
    } else {
      setCardsToShow(6);
    }
  }, [isXs, isSm, isMd]);

  useEffect(() => {
    const maxIndex = Math.max(0, properties.length - cardsToShow);
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [cardsToShow, properties.length, currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, properties.length - cardsToShow));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  

  return (
    <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
      <Box
        sx={{
          display: 'flex',
          transition: 'transform 0.3s ease-in-out',
          transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`,
        }}
      >
        {properties.map((property, index) => (
          <Box
            key={`${property.id}-${index}`}
            sx={{
              flex: `0 0 ${100 / cardsToShow}%`,
              padding: '8px',
            }}
          >
            <Card 
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                '&:hover': {
                  boxShadow: 6,
                  transform: 'translateY(-4px)',
                  transition: 'all 0.2s ease-in-out',
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={property.image}
                alt={property.name}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" component="h2" gutterBottom>
                  {property.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {property.location}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {property.surface}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <ExpandMore
                    expand= {expanded}
                    onClick={handleExpandedClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    +
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent sx={{
                    marginBottom: 2,
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <Typography>
                        {property.features}
                    </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 2,
          mt: 2
        }}
      >
        <IconButton 
          onClick={handlePrev}
          disabled={currentIndex === 0}
          sx={{
            backgroundColor: 'background.paper',
            '&:hover': { backgroundColor: 'action.hover' },
          }}
        >
          <div className='prev-button'>
            <button>
                &#10094;
            </button>
          </div>
        </IconButton>
        <IconButton 
          onClick={handleNext}
          disabled={currentIndex + cardsToShow >= properties.length}
          sx={{
            backgroundColor: 'background.paper',
            '&:hover': { backgroundColor: 'action.hover' },
          }}
        >
          <div className='next-button'>
            <button>
                &#10095;
            </button>
          </div>
        </IconButton>
      </Box>
    </Box>
  );
};

export default PropertyCarousel;
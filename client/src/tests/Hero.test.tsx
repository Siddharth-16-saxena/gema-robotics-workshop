import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Hero from '../components/sections/Hero';

describe('Hero Section Component', () => {
  it('should render the main workshop title and subtitles', () => {
    render(<Hero />);

    // Verify main headings
    const titleText = screen.getByText(/AI & Robotics/i);
    const subtitleText = screen.getByText(/Build robots, explore AI, and create real-world projects/i);

    expect(titleText).toBeInTheDocument();
    expect(subtitleText).toBeInTheDocument();

    // Verify action CTAs
    const enrollBtn = screen.getByRole('button', { name: /Enroll Now/i });
    const curriculumBtn = screen.getByRole('button', { name: /View Curriculum/i });

    expect(enrollBtn).toBeInTheDocument();
    expect(curriculumBtn).toBeInTheDocument();
  });
});

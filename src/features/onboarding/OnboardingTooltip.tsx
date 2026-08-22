import React from 'react';
import type { TooltipRenderProps } from 'react-joyride';

import { icons } from 'shared/icons';
import './Onboarding.scss';

export const OnboardingTooltip = ({step, index, size, backProps, primaryProps, closeProps, tooltipProps}: TooltipRenderProps) => (
  <div
    className="onboarding-tooltip"
    {...tooltipProps}
  >
    <div
      className="onboarding-tooltip-header"
    >
      <div
        className="onboarding-tooltip-title"
      >
        {step.title}
      </div>
      <button
        className="onboarding-tooltip-close"
        {...closeProps}
      >
        <img
          src={icons.close}
          alt=""
          width={16}
          height={16}
        />
      </button>
    </div>

    <div
      className="onboarding-tooltip-content"
    >
      {step.content}
    </div>

    <div
      className="onboarding-tooltip-footer"
    >
      <span
        className="onboarding-tooltip-step"
      >
        Шаг {index + 1} из {size}
      </span>
      <button
        className="onboarding-tooltip-button onboarding-tooltip-button-back"
        {...backProps}
      >
        Назад
      </button>
      <button
        className="onboarding-tooltip-button onboarding-tooltip-button-primary"
        {...primaryProps}
      >
        Далее
      </button>
    </div>
  </div>
);

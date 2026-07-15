import type { Meta, StoryObj } from "@storybook/react-vite";
import { within, expect } from "@storybook/test";
import Footer from "./Footer";

const meta: Meta<typeof Footer> = {
  title: "Components/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {};

export const FooterElementsVisible: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(
      canvas.getByRole("link", { name: /linkedin/i }),
    ).toBeInTheDocument();

    await expect(
      canvas.getByRole("link", { name: /github/i }),
    ).toBeInTheDocument();

    await expect(
      canvas.getByRole("link", { name: /facebook/i }),
    ).toBeInTheDocument();

    await expect(
      canvas.getByRole("button", { name: /share this page/i }),
    ).toBeInTheDocument();

    await expect(
      canvas.getByRole("button", { name: /give referrals/i }),
    ).toBeInTheDocument();

    await expect(
      canvas.getByText(/passionate full-stack developer/i),
    ).toBeInTheDocument();

    await expect(
      canvas.getByText(
        new RegExp(`© ${new Date().getFullYear()} Haftamu Desta`, "i"),
      ),
    ).toBeInTheDocument();
  },
};

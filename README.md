# SVG Generator App

## Overview

The SVG Generator App is a web-based tool that allows users to create, manipulate, and export Scalable Vector Graphics (SVG). With a range of customizable options, users can design complex graphics using shapes, paths, text, and more. The app supports advanced features such as undo/redo functionality, layer management, and freehand drawing.

## Features

- **Shape Creation**: Add and customize rectangles, circles, ellipses, and polygons.
- **Path Creation**: Create paths with multiple points, adjust stroke and fill colors.
- **Text Addition**: Add and customize text elements within your SVG.
- **Layer Management**: Manage layers with options to reorder, toggle visibility, and delete layers.
- **Undo/Redo**: Easily revert or reapply actions.
- **Freehand Drawing**: Draw custom paths directly on the canvas.
- **Polygon Drawing**: Define and create custom polygons.
- **Export Options**: Save your creations as SVG, PNG, or JPEG files.

## Installation

To run this project locally:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/ndzamboni/the-SVG-app.git
    ```

2. **Navigate to the project directory**:
    ```bash
    cd svg-generator-app
    ```

3. **Install dependencies for the client**:
    ```bash
    cd client
    npm install
    ```

4. **Start the development server**:
    ```bash
    npm start
    ```

    The app will run on `http://localhost:3000`.

## Usage

- **Adding Shapes**: Use the shape controls to add shapes like rectangles, circles, and polygons.
- **Editing Paths**: Add points to create custom paths or modify existing paths using the path controls.
- **Managing Layers**: Toggle visibility, reorder, group, and delete layers using the Layer Manager.
- **Undo/Redo**: Use the undo and redo buttons to manage your changes.
- **Exporting**: Save your work using the export options available in the Export Controls.

## Project Structure

- **`/client`**: Contains the frontend code.
- **`/components`**: Contains React components such as `SvgCanvas`, `LayerManager`, `ShapeControls`, etc.
- **`SvgCanvas.js`**: Main canvas component for rendering and editing SVGs.
- **`LayerManager.js`**: Component for managing SVG layers.
- **`ShapeControls.js`**: Component for adding and customizing shapes.
- **`PathControls.js`**: Component for adding and customizing paths.
- **`ExportControls.js`**: Component for exporting SVG designs to various formats.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License.

## Contact

For any questions or feedback, please reach out to [ndzamboni@gmail.com].

// @ts-ignore
import { createEmpty2D } from "../utils/arrayUtils.ts";

export class Map {
  private _grid: any[];
  private _height: number;
  private _width: number;
  constructor(height: number, width: number) {
    this._height = height;
    this._width = width;
    this._grid = createEmpty2D(width, height);
  }

  get width(): number {
    return this._width;
  }
  get height(): number {
    return this._height;
  }
  get grid1D(): any[] {
    return this._grid;
  }
  get grid2D() {
    return Map.to2D(this._grid, this._width, this._height);
  }

  public static to1D(grid: any) {
    return grid.map((row: any) => row).flat();
  }

  public static to2D(grid: any, width: number, height: number) {
    let result = createEmpty2D(width, height);
    grid.forEach((cell:any, i:number) => {
      const row = Math.floor(i / width);
      const col = i % width;
      result[row][col] = cell;
    });
    return result
  }
}
